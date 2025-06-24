// config/accessControl.js

export const fullAccessRoles = [
    'Admin',
    'User',
];

export const roleAccessMap = {
    'cumplimiento - auditor externo': {
        allow: ['/monitoring'],
        deny: ['/farm', '/lab', '/custody'],
    },
    'corporate - presidente': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody', '/farm/costs'],
    },
    'corporate - general manager': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'corporate - financial management': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'corporate - management assistant': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },

    'production - production assistant': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'production - production coordinator': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'production - production manager': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },

    'technique - property manager': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'technique - aquaculture engineer': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'technique - biologist': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'technique - technical assistant': {
        allow: ['/', '/farm'],
        deny: ['/farm/users', '/farm/client', '/lab', '/custody'],
    },
    'technical - sector supervisor': {
        allow: ['/farm'],
        deny: ['/farm/planning-studio', '/farm/real-planning', 'farm/analytics', '/farm/operation-report', '/farm/analytics/report',
            '/farm/seeding-coords', '/farm/fishing-coords', '/farm/laboratory/view', '/farm/packing/view', '/lab', '/custody', '/farm/users',
            '/farm/client', '/farm/costs', '/farm/traceability']
    },
    'technical - field chief': {
        allow: ['/farm'],
        deny: ['/farm/planning-studio', '/farm/real-planning', 'farm/analytics', '/farm/operation-report', '/farm/analytics/report',
            '/farm/seeding-coords', '/farm/fishing-coords', '/farm/laboratory/view', '/farm/packing/view', '/lab', '/custody', '/farm/users',
            '/farm/client', '/farm/costs', '/farm/traceability']
    },

    'operations - field operator': {
        allow: ['/farm'],
        deny: ['/farm/planning-studio', '/farm/real-planning', 'farm/analytics', '/farm/operation-report', '/farm/analytics/report',
            '/farm/seeding-coords', '/farm/fishing-coords', '/farm/laboratory/view', '/farm/packing/view', '/lab', '/custody', '/farm/users',
            '/farm/client', '/farm/costs', '/farm/traceability', '/farm/inventory']
    },
    'special operation - parametrist':{
        allow: [],
        deny: ['/farm', '/lab', '/custody', '/monitoring']
    },
};
