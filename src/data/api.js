
export function getAllTechnologyItems() {

  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyData), 1000);
  });
}

const dummyData = {
  VueJS: {
    id: 'VueJS',
    name: 'Vue.js',
    subtitle: 'The Progressive JavaScript Framework',
    summary: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.'
  },
  Bootstrap: {
    id: 'Bootstrap',
    name: 'Bootstrap',
    subtitle: 'Build responsive, mobile-first projects on the web',
    summary: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.'
  },
  React: {
    id: 'React',
    name: 'React',
    subtitle: 'A JavaScript library for building user interfaces',
    summary: 'React makes it painless to create interactive UIs'
  },
  Knockout: {
    id: 'Knockout',
    name: 'Knockout',
    subtitle: 'Simplify dynamic JavaScript UIs with the MVVM pattern',
    summary: 'By encapsulating data and behavior into a view model, you get a clean, extensible foundation on which to build sophisticated UIs'
  }
};


