const initialGlobalState = {
 
  applicationFormResultMessage: null
}
const setApplicationFormResultMessage = (draft:any, payload:any) => {
    draft.applicationFormResultMessage = payload
    return draft
  }
  
  function GlobalReducer(draft:any, action:any) {
    const actions:any = {
      setApplicationFormResultMessage: () => setApplicationFormResultMessage(draft, action.payload)
    }
  
    draft = actions[action.type]()
  }
  
  export { GlobalReducer, initialGlobalState }