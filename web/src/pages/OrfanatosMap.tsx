import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import api from '../services/api';

import mapMarkerImg from '../imagens/map-marker.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/orfanatos-map.css';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrfanatosMap (){
 
    const [orphanages, setOrphanages ] = useState<Orphanage[]>([]);
    
    useEffect( () => {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);


    return (
         <div id="page-map">
             <aside>
                 <header>
                     <img src={mapMarkerImg} alt="Happy" />

                     <h2>Escolha um orfanato no seu mapa</h2>
                     <p>Muitas criançãs estão esperando a sua visita :D </p>
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

            {orphanages.map(orphanage => {
                return(
                    <Marker
                        icon={mapIcon}
                        position={[ orphanage.latitude, orphanage.longitude ]}
                        key={orphanage.id}
                    >
                
                    <Popup closeButton={false} minWidth={240} maxWidth={241} className="map-popup" >
                    {orphanage.name}
                    <Link to={`/orphanages/${orphanage.id}`}>
                        <FiArrowRight size={20} color="#fff" />
                    </Link>
                    </Popup>
                </Marker>
                    )
                })}

            </Map>
            
            <Link to="/orphanages/create" className="create-orfanato"> 
                <FiPlus size={32} color="#fff" />
            </Link>
         </div>
    );
}

export default OrfanatosMap;