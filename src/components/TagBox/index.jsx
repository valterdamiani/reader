import React, {useState, useEffect} from 'react'
import Tag from '../Tag';
import api from '../../providers/api';

export default function TagBox (props) {

    const [tags, setTags] = useState([])

    useEffect(() => {
        api.get(`/tags`)
        .then(res => {
          const tags = res.data.tags;
          setTags( tags );
        })
    }, []);

  return (
    <div class="col-md-3">
        <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
                {tags.map(tag => <Tag data={tag}/>)}
            </div>
        </div>
    </div>
  );
};