export class Routing {
  ROUTES = {
    '/': {
      module: 'User',
      action: 'list',
    },
    '/user/add/': {
      module: 'User',
      action: 'add',
    },
    '/user/edit/': {
      module: 'User',
      action: 'edit',
    },
    '/user/delete/': {
      module: 'User',
      action: 'delete',
    },
  };

  constructor() {
    this.route = '';
  }

  findRoute() {
    this.route = window.location.pathname;
  }
}
