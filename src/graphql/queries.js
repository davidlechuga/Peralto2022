/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListItem = /* GraphQL */ `
  query GetListItem($id: ID!) {
    getListItem(id: $id) {
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
export const listListItems = /* GraphQL */ `
  query ListListItems(
    $filter: ModelListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
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
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchLists = /* GraphQL */ `
  query SearchLists(
    $filter: SearchableListFilterInput
    $sort: [SearchableListSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableListAggregationInput]
  ) {
    searchLists(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
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
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
