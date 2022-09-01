import { StarshipsGrid } from "../../components/grid/starships/StarshipsGrid";
import { strings } from "../../utils/strings";

import React from 'react'


export const Starships = () => {
  return (
    <div>
    <h1 className='title'>{strings.title_starships}</h1>
    <StarshipsGrid/>
    </div>
  )}

