import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchComments } from './CommentsSlice';

function CommentsView () {
    const commentSlice = useSelector(state => state.comment);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchComments());
    }, [fetchComments])

    return (
        <>
          <h2>Commentaires</h2>
          {
            commentSlice.isLoading ? <p>Veuillez patienter ...</p>
            : commentSlice.error ? <p style={{color: 'red', textAlign:'center'}}>{commentSlice.error}</p>
            : commentSlice.comments.map(({body, email, id ,name}) => {
                return (
                    <div className='comments' key={id}>
                        <p>Nom : {name}</p>
                        <p>Email : {email}</p>
                        <p>Avis : {body}</p>
                    </div>
                )
            })
          }  
        </>
    )
}

export default CommentsView