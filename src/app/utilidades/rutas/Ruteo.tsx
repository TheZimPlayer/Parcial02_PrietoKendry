import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";


import { PeliculaCrear } from "../../componentes/Peliculas/PeliculaCrear";
import { PeliculaAdmin } from "../../componentes/Peliculas/PeliculaAdmin";
import { PeliculaListar } from "../../componentes/Peliculas/PeliculaListar";

export const Ruteo  = () =>{
    return(
        <Routes>
            <Route path="/inicio" element={<Inicio/>}/>

            <Route path="/pelcre" element={<PeliculaCrear/>}/>

            <Route path="/peladm" element={<PeliculaAdmin/>}/>

            <Route path="/pellist" element={<PeliculaListar/>}/>

            <Route path="*" element={<NoEncontrado/>}/>

        </Routes>
    )
}