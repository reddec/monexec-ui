const superVisorConfig = [{
    "Name": "listener2",
    "Command": "/bin/bash",
    "Args": [
        "-c",
        "nc -l 9001"
    ],
    "Environment": {
        RUN: 'xxxx',
        PUSSS_ASD_ASD_ASD: "x0asdlasdjalkjdlakjsdlakjdlaksjdlaksjdlaksjdlaksjd"
    },
    "WorkDir": "/tmp/dev",
    "StopTimeout": 5000000000,
    "RestartTimeout": 1000000000,
    "Restart": -1,
    "LogFile": "sample.log"
},
    {
        "Name": "listener3",
        "Command": "/bin/bash",
        "Args": [
            "-c",
            "nc -l 9001"
        ],
        "WorkDir": "/tmp/dev",
        "StopTimeout": 5000000000,
        "RestartTimeout": 1000000000,
        "Restart": -1,
        "LogFile": "sample3.log"
    },
    {
        "Name": "listener4",
        "Command": "/bin/bash",
        "Args": [
            "-c",
            "nc -l 9001"
        ],
        "StopTimeout": 5000000000,
        "RestartTimeout": 1000000000,
        "Restart": -1,
        "LogFile": "sample.log"
    }];

import Monexec from './components/monexec.html';

let srv = new Monexec({
    target: document.getElementById('supervisors'),
    data: {
        configs: superVisorConfig,
    }
});
