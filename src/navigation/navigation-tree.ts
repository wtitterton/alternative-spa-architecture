import 'reflect-metadata'
import { injectable } from 'inversify'
import TreeModel from 'tree-model'

@injectable()
export class NavigationTree {
     getTree() {
    const tree = new TreeModel();

    let root = tree.parse({
      id: 'homeLink',
      type: 'root',
      text: 'Home',
      children: [
        {
          id: 'booksExpand',
          type: 'expand',
          text: 'Books',
          children: [
            {
              id: 'booksLink',
              type: 'link',
              text: 'Books',
              children: [
                {
                  id: 'addBooksLink',
                  type: 'link',
                  text: 'Add Book',
                   children: [
                    {
                      id: 'booksLink',
                      type: 'link',
                      text: 'Books',
                    }
                  ]
                }
              ]
            },
            {
              id: 'addBooksLink',
              type: 'link',
              text: 'Add Book',
            }
          ]
        },
        {
          id: 'authorsExpand',
          type: 'expand',
          text: 'Authors',
          children: [
            {
              id: 'authorsLink',
              type: 'link',
              text: 'Authors',
              children: [
                {
                  id: 'addAuthorsLink',
                  type: 'link',
                  text: 'Add Author',
                  children: [
                    {
                       id: 'authorsLink',
                       type: 'link',
                       text: 'Authors',
                    }
                  ]
                },
                {
                  id: 'authorsPolicyLink',
                  type: 'link',
                  text: 'Author Policy',
                  children:[]
                },
                {
                  id: 'authorsMapLink',
                  type: 'link',
                  text: 'View Map',
                  children: []
                }
              ]
            },
            {
              id: 'addAuthorsLink',
              type: 'link',
              text: 'Add Author',
              children: [
                {
                  id: 'authorsMapLink',
                  type: 'link',
                  text: 'View Map'
                },
                {
                  id: 'authorsPolicyLink',
                  type: 'link',
                  text: 'Author Policy'
                }
              ]
            },  
            // {
            //   id: 'authorsMapLink',
            //   type: 'link',
            //   text: 'Authors Map'
            // }
          ]
        }
      ]
    })

    return root
  }
}