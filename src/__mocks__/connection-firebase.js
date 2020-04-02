const mockFirebase = {
  collection: (nameCollection) => {
    return {
      add: (objData) => Promise.resolve(objData),
    }
  }
}

export default mockFirebase;