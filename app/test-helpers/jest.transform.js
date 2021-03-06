module.exports = require('babel-jest').createTransformer({
    'presets': ['es2015', 'react', 'stage-3'],
    'plugins': [
        [
            'module-alias',
            [
                {
                    'src': './app/client',
                    'expose': 'client'
                },
                {
                    'src': './app/client/styles',
                    'expose': 'styles'
                },
                {
                    'src': './app/client/components',
                    'expose': 'components'
                },
                {
                    'src': './app/client/constants',
                    'expose': 'constants'
                },
                {
                    'src': './app/client/containers',
                    'expose': 'containers'
                },
                {
                    'src': './app/client/actions',
                    'expose': 'actions'
                },
                {
                    'src': './app/client/selectors',
                    'expose': 'selectors'
                },
                {
                    'src': './app/client/services',
                    'expose': 'services'
                },
                {
                    'src': './app/test-helpers',
                    'expose': 'test-helpers'
                }
            ]
        ]
    ]
});
