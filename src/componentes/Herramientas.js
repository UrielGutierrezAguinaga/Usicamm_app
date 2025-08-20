// componentes/Herramientas.js
import metadata from "../HerramientasDGA/metadata.json";
import React, { useMemo, useState } from "react";
import styled from "styled-components";

const fondo = "rgb(16,49,43)";
const vino = "rgb(105,28,50)";
const dorado = "rgb(221,201,163)";

const Wrapper = styled.div`
  background: ${fondo};
  color: white;
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  padding: 18px 18px 90px;
`;

const TopBar = styled.div`
  border-bottom: 1px solid rgba(255,255,255,.12);
  padding: 8px 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1` margin: 8px 0 0; `;

const TablaBox = styled.div`
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 10px;
  padding: 12px;
  margin-top: 18px;
  background: rgba(255,255,255,.03);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td { text-align: left; padding: 12px; }
  thead th { font-weight: 700; border-bottom: 1px solid rgba(255,255,255,.12); }

  tbody tr { border-top: 1px solid rgba(255,255,255,.08); transition: background .15s; cursor: pointer; }
  tbody tr:hover { background: rgba(255,255,255,.06); }

  @media (max-width: 820px){
    th:nth-child(3), td:nth-child(3) { display: none; }
  }
`;

const Row = styled.tr`
  background: ${p => (p.$active ? "rgba(221,201,163,.12)" : "transparent")};
  border-left: ${p => (p.$active ? `3px solid ${dorado}` : "3px solid transparent")};
`;

const DownloadBar = styled.div`
  position: fixed; right: 24px; bottom: 24px;
`;

const Btn = styled.button`
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 800;
  font-size: 16px;
  border: none;
  background: ${vino};
  color: white;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0,0,0,.35);
  opacity: ${p => (p.disabled ? .6 : 1)};
  pointer-events: ${p => (p.disabled ? "none" : "auto")};
  transition: transform .06s, opacity .15s;
  &:active{ transform: translateY(1px); }
`;

export default function Herramientas(){
  const [seleccion, setSeleccion] = useState(null);

  const archivos = useMemo(() => {
    try {
      const ctx = require.context("../HerramientasDGA", true, /.*/);

      return ctx.keys()
        .filter(key => !key.includes("metadata")) // ignora metadata de descripcion
        .map((key, idx) => {
          const url = ctx(key);
          const nombre = key.replace("./", "");
          const meta = metadata.find(m => m.nombre === nombre) || {};

          return {
            id: idx + 1,
            nombre,
            descripcion: meta.descripcion || "Archivo disponible para descarga.",
            sistema: meta.sistema || "N/A",
            anio: meta.anio || new Date().getFullYear(),
            url
          };
        });
    } catch (e) {
      console.warn("No se pudo cargar src/HerramientasDGA. ¿Existe la carpeta?", e);
      return [];
    }
  }, []);

  const onDescargar = () => {
    if(!seleccion) return;
    const a = document.createElement("a");
    a.href = seleccion.url;
    a.download = seleccion.nombre;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onRegresar = () => {
    window.history.back(); //  página anterior
  };

  return (
    <Wrapper>
      <TopBar>
        <Title>Consultar de Herramientas digitales PKJ</Title>
        <Btn onClick={onRegresar}>⬅ Regresar</Btn>
      </TopBar>

      <TablaBox>
        <Table>
          <thead>
            <tr>
              <th style={{width:80}}>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th style={{width:220}}>Sistema</th>
              <th style={{width:100}}>Año</th>
            </tr>
          </thead>
          <tbody>
            {archivos.map(h => (
              <Row
                key={h.id}
                $active={seleccion?.id === h.id}
                onClick={() => setSeleccion(h)}
              >
                <td>{h.id}</td>
                <td>{h.nombre}</td>
                <td style={{opacity:.9}}>{h.descripcion}</td>
                <td>{h.sistema}</td>
                <td>{h.anio}</td>
              </Row>
            ))}
            {archivos.length === 0 && (
              <tr><td colSpan="5" style={{opacity:.7, padding:16}}>
                No hay archivos en <b>src/HerramientasDGA</b>.
              </td></tr>
            )}
          </tbody>
        </Table>
      </TablaBox>

      <DownloadBar>
        <Btn onClick={onDescargar} disabled={!seleccion}>Descarga herramienta</Btn>
      </DownloadBar>
    </Wrapper>
  );
}