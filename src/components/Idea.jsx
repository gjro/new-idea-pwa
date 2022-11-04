import React from 'react'
import './Idea.less'
const Idea = ({idea, onDelete}) => (
    <div className="app__content__idea">
        <p className="app_content__idea__text">{idea.content}</p>
        <button
            type='button'
            className="app__btn app__content__idea_btn"
            id='{idea.id}'
            onClick={onDelete}
            > - </button>
    </div>
)

export default Idea