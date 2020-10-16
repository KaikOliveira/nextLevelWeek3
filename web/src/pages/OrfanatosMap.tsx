import React from 'react';
import {Link} from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orfanatos-map.css';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../imagens/map-marker.svg';

function OrfanatosMap (){
    return (
         <div id="page-map">
             <aside>
                 <header>
                     <img src={mapMarkerImg} alt="Happy" />

                     <h2>Escolha um orfanato no seu mapa</h2>
                     <p>Muitas criançãs estão esperando a sua visita :)</p>
                 </header>

                 <footer>
                     <strong>São Paulo</strong>
                     <span>Quatá</span>
                 </footer>
             </aside>

             <Map 
                center={[ -22.2462319, -50.7030823 ]} 
                zoom={15.25}
                style={{ width: '100%', height: '100%' }}
            >
             {/*   <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />  */}
                
                
                <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                
            </Map>
            
            <Link to="" className="create-orfanato"> 
                <FiPlus size={32} color="#fff" />
            </Link>
         </div>
    );
}

export default OrfanatosMap;