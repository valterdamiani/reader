import React, {useState, useEffect} from 'react'

export default function Tag (props) {
    const [tagName, setTag] = useState('');

    useEffect(() => {
        let name;
        if(props) {
            name = props.data.trim()
            setTag(name)
            }
    }, [props])
    if (tagName.length > 1){ 
        return (
            <a href="" className="tag-pill tag-default">{tagName}</a> 
        );
    }
return <div></div>;
};