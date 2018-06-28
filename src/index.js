import Monexec from './components/monexec.html';

let srv = new Monexec({
    target: document.getElementById('supervisors'),
    data: {
        configs: fetch('../supervisors', {
            method: 'get',
        }).then(function (r) {
            if (r.status !== 200) {
                console.warn(r.status, r.statusText)
            } else {
                return Promise.all(JSON.parse(r.body).map((name) => {
                    return fetch('../supervisor/' + encodeURIComponent(name), {
                        method: 'get',
                    }).then((data) => {
                        return JSON.parse(data.body);
                    })
                }))
            }

        }).catch(function (err) {
            console.error(config.Name, err);
        })
    }
});
