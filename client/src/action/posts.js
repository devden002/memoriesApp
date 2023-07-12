import * as api from '../api/index';

export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type:'FETCH_ALL', payload: data})  
    } catch (error) {
        console.log(error)
    }
}

export const postDetail = (id) => async (dispatch) => {
    try {
        const { data } = await api.postDetail(id);
        console.log(data, 'data')
        dispatch({type:'POST_DETAIL', payload: data})  
    } catch (error) {
        console.log(error)
    }
}

export const createPost  = (post) => async (dispatch) =>  {
    try {
        const { data } = await api.createPost(post)
        dispatch({
            type: 'CREATE_POST',
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id);
      dispatch({type:"DELETE", payload: id})
    } catch (error) {
      console.log(error)
    }
  
  }

  export const updatePost = (id, post) => async (dispatch) => {
      try {
          const { data } = await api.updatePost(id, post)
          console.log(data, 'updatedData')
          dispatch({type:"UPDATE", payload:data})
      } catch (error) {
          console.log(error)
      }
  }

  export const storeId = (id) => async (dispatch) => {
      try {
        dispatch({type:"STOREID", payload: id})
      } catch (error) {
          console.log(error)
      }
  }

  export const likePost = (id) => async (dispatch) => {
      try {
        const { data } = await api.likePost(id);
        dispatch({type:"LIKE", payload:data})
      } catch (error) {
          console.log(error)
      }
  }