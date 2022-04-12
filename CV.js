const nikolasmelui = {
  name: 'Nikolai Sladkii',
  birth: 1991,
  role: 'backend developer',
  experience: '9 years',
  contacts: {
    phone: '+79093442211',
    email: 'nikolasmelui@gmail.com',
    socials: '@nikolasmelui',
  },
  skills: {
    techs: ['node.js', 'golang', 'python', 'java', 'php'],
    tools: ['postgresql', 'redis', 'rabbitmq', 'nginx', 'postman', 'git', ...etc],
    ops: ['docker', 'k8s', 'ansible', 'ci/cd', 'actions',  ...etc],
  },
  plans: {
    techs: ['elixir', 'rust'],
    tools: ['4+1 avm'],
  },
  love: ['*nix', 'vim', 'clean code', 'architecture', 'open source'],
  work: [
    {
      company: 'voximplant',
      actual: true,
      projects: [
        {
          short:
            'VoxEngine - an application engine that runs your apps inside the VoxImplant cloud',
          role: 'senior serverless (backend)',
          tech: ['node.js', 'golang', 'c++'],
          tasks: [
            'serverless cloud platform lib and API development',
          ],
        },
      ],
    },
    {
      company: 'mechanica',
      actual: false,
      projects: [
        {
          short:
            'backend application for the of bonuses, discounts and cashback system',
          role: 'lead backend',
          tech: ['php', 'laravel'],
          tasks: [
            'backend API development',
            'implementation of methods and adapters for communication with the side CMS system',
            '... and diving in a really (overly) complex infrastructure!',
          ],
        },
        {
          short: 'backend application for the online poster of ESports events',
          roles: 'lead backend',
          tech: ['node.js', 'strapi'],
          tasks: [
            'application architecture design',
            'backend API development',
            'implementation of an additional intermediate service for collecting data from third-party systems and regularly updating the main poster information',
            'development the push-notification module',
          ],
        },
        {
          short:
            'golang microservice for b2b electronics portal (collecting, caching, changes checking and data sending (to the side system))',
          role: 'senior backend',
          tech: ['golang', 'redis'],
          tasks: [
            'application architecture design',
            'backend API development',
            'implementation of the collecting and sending (to the side system) data mechanism',
            'development the caching and changes checking mechanism',
          ],
        },
        {
          short:
            'full-stack web back-office application for the iVolga 2.0 youth forum',
          role: 'lead backend',
          tech: ['node.js', 'loopback', 'react'],
          tasks: [
            'application architecture design',
            'backend API development',
            'frontend UI development',
            'implementation of "inventory accounting", "registration", "authorization", "accreditation" etc. modules',
          ],
        },
        ...etc,
      ],
    },
  ],
  pet: ['The information will appear soon'],
};
