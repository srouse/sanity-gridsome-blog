export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6266cb5df83c2537c5e04911',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-pezga2ro',
                  apiId: '372240fe-ff4b-4a08-abcc-ec76b3929cb3'
                },
                {
                  buildHookId: '6266cb5e6f75a73957876721',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-d2rxgabh',
                  apiId: '4df936b4-c355-40eb-b5c9-74efa6d7a2c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/srouse/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-d2rxgabh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
