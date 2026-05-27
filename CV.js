/* eslint-disable no-unused-vars */
/**
 * Single source of truth for profile and CV data.
 * README bio section: node scripts/sync-readme.js
 * Site: index.html loads this file directly.
 */
const nikolasmelui = {
  name: 'Nikolai Sladkii',
  birth: 1991,
  place: 'Russia, Moscow',
  role: 'Head of VoxEngine & DevTools',
  headline: 'Full-stack web developer (backend based)',
  experience: '10+ years',
  contacts: {
    phone: '+79093442211',
    email: 'nikolasmelui@gmail.com',
    socials: '@nikolasmelui',
  },
  skills: {
    techs: [
      'golang',
      'javascript/typescript (backend)',
      'node.js',
      'python',
      'dotnet',
      'java',
      'php',
      'react/vue (frontend)',
    ],
    tools: [
      'postgresql',
      'mongodb',
      'redis',
      'rabbitmq',
      'nginx',
      'postman',
      'git',
    ],
    ops: ['docker', 'kubernetes', 'ansible', 'ci/cd', 'github actions'],
  },
  plans: {
    techs: ['elixir', 'rust'],
    tools: ['4+1 architectural views'],
  },
  love: ['*nix', 'vim', 'clean code', 'architecture', 'open source'],
  community: [
    {
      title: 'VP',
      org: 'Samara IT Community',
      url: 'https://sitc.community/',
    },
    {
      title: 'Chairman',
      org: 'Пивной Четверг',
      url: 'https://beer4.ru',
      altUrl: 'https://boosty.to/beer4',
    },
    {
      title: 'Co-author & technology stakeholder',
      org: 'Junost',
      url: 'https://anmedio.github.io/junost/',
    },
    {
      title: 'Speaker',
      org: 'GrindConf',
      url: 'https://sitc.community/events/grind-conf/',
    },
    {
      title: 'Expert',
      org: 'VolgaHack',
      url: 'https://sitc.community/events/volgahack/',
    },
    {
      title: 'Host',
      org: 'SITCast & SITalk',
      url: 'https://podcasts.apple.com/ru/podcast/sitcast/id1449716272',
    },
  ],
  current: {
    company: 'Voximplant',
    url: 'https://voximplant.com',
    role: 'Head of VoxEngine & DevTools',
    focus: [
      { name: 'VoxEngine', url: 'https://voximplant.com/docs/guides/voxengine' },
      { name: 'VoxEngine CI', url: 'https://github.com/voximplant/voxengine-ci' },
      { name: 'API Client (Node.js)', url: 'https://github.com/voximplant/apiclient-nodejs' },
    ],
  },
  past: [
    { role: 'ex-CTO', org: 'Mechanica / Anmedio', url: 'https://mechanica.agency/' },
    { role: 'ex-CTO', org: 'Multikey', url: 'https://multikey.studio' },
  ],
  work: [
    {
      company: 'Voximplant',
      actual: true,
      projects: [
        {
          short:
            'VoxEngine CI — manage Voximplant applications, rules, and scenarios from your own environment',
          more: 'https://voximplant.com/docs/guides/voxengine/ci',
          role: 'Head of VoxEngine & DevTools',
          tech: ['node.js', 'ci tooling'],
          tasks: [
            'product and platform direction',
            'application architecture design',
            'backend API and developer tooling',
          ],
        },
        {
          short:
            'VoxEngine — cloud runtime for JavaScript scenarios: calls, IVR, speech synthesis/recognition, recordings, and more',
          more: 'https://voximplant.com/docs/guides/voxengine',
          role: 'Head of VoxEngine & DevTools',
          tech: ['javascript/typescript', 'c++'],
          tasks: [
            'platform architecture and evolution',
            'backend API development',
            'developer experience and tooling',
          ],
        },
        {
          short: 'Voximplant API client for Node.js',
          more: 'https://github.com/voximplant/apiclient-nodejs',
          role: 'Head of VoxEngine & DevTools',
          tech: ['node.js', 'typescript'],
          tasks: ['library design', 'maintainer'],
        },
      ],
    },
    {
      company: 'Mechanica',
      actual: false,
      projects: [
        {
          short:
            'Backend for bonuses, discounts, and cashback system',
          role: 'Lead backend',
          tech: ['php', 'laravel'],
          tasks: [
            'backend API development',
            'CMS integration adapters',
            'complex legacy infrastructure',
          ],
        },
        {
          short: 'Backend for online ESports events poster',
          role: 'Lead backend',
          tech: ['node.js', 'strapi'],
          tasks: [
            'application architecture design',
            'backend API development',
            'aggregation service for third-party data feeds',
            'push-notification module',
          ],
        },
        {
          short:
            'Golang microservice for B2B electronics portal (collect, cache, diff, sync)',
          role: 'Senior backend',
          tech: ['golang', 'redis'],
          tasks: [
            'application architecture design',
            'backend API development',
            'caching and change-detection pipelines',
          ],
        },
        {
          short: 'Full-stack back-office for iVolga 2.0 youth forum',
          role: 'Lead backend',
          tech: ['node.js', 'loopback', 'react'],
          tasks: [
            'application architecture design',
            'backend API and frontend UI development',
            'inventory, registration, authorization, accreditation modules',
          ],
        },
      ],
    },
  ],
  pet: ['The information will appear soon'],
};

function formatReadmeBio(cv = nikolasmelui) {
  const lines = [
    'Who am I? 🤔',
    `${cv.headline} with ${cv.experience} of strong experience 💪 in backend and frontend development,`,
    'DevOps culture addict, technology evangelist, software applications architect and',
    'lead, responsible for results 👍',
    'Open Source engineer 🌱 and IT community enthusiast 🌿, speaker at conferences and meetups 🎤,',
  ];

  lines.push(
    `ex-CTO at [Mechanica, ex-Anmedio](${cv.past[0].url}) and [Multikey](${cv.past[1].url}),`,
    `VP at ["Samara IT Community"](${cv.community[0].url}),`,
    `chairman of [Пивной Четверг](${cv.community[1].url}) / [Пивной Четверг — Boosty](${cv.community[1].altUrl})`,
    `co-author and technology stakeholder of [Junost](${cv.community[2].url}),`,
    `speaker at [GrindConf](${cv.community[3].url}),`,
    `expert at [VolgaHack](${cv.community[4].url}),`,
    `host at [SITCast](${cv.community[5].url}) and [SITalk](${cv.community[5].url})`,
  );

  lines.push(
    'In love with *nix based systems 🐧, vim ⚡, clean code ♻️, architectural approaches 🧠',
    'and open source 🚀 as the best thing that has happened to humanity 😻😻😻',
    '...',
    `Currently working hard on ${cv.current.focus
      .map((p) => `[${p.name}](${p.url})`)
      .join(', ')} and other cool things 🔥 at [${cv.current.company}](${cv.current.url}) 💜 as **${cv.current.role}** 👷`,
    '...',
    `${cv.contacts.socials} — all socials 💬`,
    '...',
    `[CV source: CV.js](https://github.com/NikolasMelui/nikolasmelui/blob/master/CV.js) · [Site](https://nikolasmelui.github.io/)`,
    '...',
  );

  return lines.map((line) => `${line}  `).join('\n');
}

function formatCvPlain(cv = nikolasmelui) {
  const sections = [
    `// ${cv.name} · ${cv.role}`,
    `// ${cv.place} · ${cv.experience}`,
    '',
    `const ${'{'} name, role, contacts ${'}'} = nikolasmelui;`,
    '',
    JSON.stringify(
      {
        name: cv.name,
        role: cv.role,
        experience: cv.experience,
        contacts: cv.contacts,
        skills: cv.skills,
        current: cv.current,
      },
      null,
      2,
    ),
    '',
    '// work[]',
    ...cv.work.map((job) => {
      const tag = job.actual ? '[current]' : '[past]';
      const projects = job.projects
        .map((p) => `  - ${p.short} (${p.role})`)
        .join('\n');
      return `${tag} ${job.company}\n${projects}`;
    }),
    '',
    '// community[]',
    ...cv.community.map((c) => `  - ${c.title}: ${c.org}`),
  ];

  return sections.join('\n');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    nikolasmelui,
    formatReadmeBio,
    formatCvPlain,
  };
}

if (typeof window !== 'undefined') {
  window.nikolasmelui = nikolasmelui;
  window.formatReadmeBio = formatReadmeBio;
  window.formatCvPlain = formatCvPlain;
}
