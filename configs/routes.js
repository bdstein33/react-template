export default {
    home: {
        path: '/',
        method: 'get',
        handler: require('../components/Home'),
        label: 'Home',
        action: (context, payload, done) => {
            context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Home | flux-examples | routing' });
            done();
        }
    }
};
