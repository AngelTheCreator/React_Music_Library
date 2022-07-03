import { useEffect, useState } from 'react';

function GalleryItem(props){
    let [view, setView] = useState(false)

    return (
        <div onCLick={ () => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
        </div>
    )
}

export default GalleryItem