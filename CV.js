const nikolasmelui = {
  name: 'Nikolai Sladkii',
  birth: 1991,
  role: 'Head of VoxEngine & DevTools',
  experience: '10+ years',
  contacts: {
    phone: '+79093442211',
    email: 'nikolasmelui@gmail.com',
    socials: '@nikolasmelui',
  },
  skills: {
    techs: ['javascript/typescript (backend)', 'golang', 'python', 'dotnet', 'java', 'php'],
    tools: ['postgresql', 'redis', 'rabbitmq', 'nginx', 'postman', 'git', ...etc],
    ops: ['docker', 'k8s', 'ansible', 'ci/cd', 'actions',  ...etc],
  },
  interests: {
    techs: ['elixir', 'rust'],
    tools: ['4+1 avm'б Head of VoxEngine & DevTools],
  },
  love: ['*nix', 'vim', 'clean code', 'architecture', 'open source'],
  work: [
    {
      company: 'Voximplant',
      actual: true,
      projects: [
        {
          short:
            'VoxEngineCI - manage Voximplant applications, rules, and scenarios from your own environment',
          more: 'https://voximplant.com/docs/guides/voxengine/ci',
          role: 'Principal Engineer (backaend)',
          tech: ['node.js', 'ci tools'],
          tasks: [
            'application architecture design',
            'backend API development',
          ],
        },
        {
          short:
            'VoxEngine - powerful cloud-based tool (runtime) to process javascript scenarios using features like calls, IVRs, speech synthesis / recognition, call recordings, and much more',
          more: 'https://voximplant.com/docs/guides/voxengine',
          role: 'Principal Engineer (backend)',
          tech: ['javascript/typescript (backand)', 'c++'],
          tasks: [
            'application architecture design',
            'backend API development',
          ],
        },
      ],
    },
    {
      company: 'Mechanica',
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
