/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListItem = /* GraphQL */ `
  subscription OnCreateListItem {
    onCreateListItem {
      id
      title
      quatity
      done
      list {
        id
        title
        description
        listItems {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      actions {
        id
        action
        listItem {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListItem = /* GraphQL */ `
  subscription OnUpdateListItem {
    onUpdateListItem {
      id
      title
      quatity
      done
      list {
        id
        title
        description
        listItems {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      actions {
        id
        action
        listItem {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListItem = /* GraphQL */ `
  subscription OnDeleteListItem {
    onDeleteListItem {
      id
      title
      quatity
      done
      list {
        id
        title
        description
        listItems {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      actions {
        id
        action
        listItem {
          id
          title
          quatity
          done
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
      id
      action
      listItem {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
      id
      action
      listItem {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
      id
      action
      listItem {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($owner: String) {
    onCreateList(owner: $owner) {
      id
      title
      description
      listItems {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($owner: String) {
    onUpdateList(owner: $owner) {
      id
      title
      description
      listItems {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($owner: String) {
    onDeleteList(owner: $owner) {
      id
      title
      description
      listItems {
        id
        title
        quatity
        done
        list {
          id
          title
          description
          createdAt
          updatedAt
          owner
        }
        actions {
          id
          action
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
