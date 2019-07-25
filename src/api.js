
export function getAllTechnologyItems() {

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(dummyData), 1000);
  });
}

const dummyData = {
  VueJS: {
    id: 'VueJS',
    title: 'Vue.js',
    subtitle: 'The Progressive JavaScript Framework',
    body: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.'
  },
  Bootstrap: {
    id: 'Bootstrap',
    title: 'Bootstrap',
    subtitle: 'Build responsive, mobile-first projects on the web',
    body: 'Bootstrap is an open source toolkit for developing with HTML, CSS, and JS.'
  }
};


