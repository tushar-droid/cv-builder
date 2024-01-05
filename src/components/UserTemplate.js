const User = {
    firstName:'name',
    lastName:'',
    address: '',
    email: '',
    phone: '',
    links: {
        git: '',
        linkedin: '',
        portfolio: ''
    },
    skills: {
        progLanguages: [],
        os: [],
        db: [],
        webtools: [],
        othertools: [],
    },

    work: [
        {
            id:0,
            position: 'Software Developer Intern',
            company: 'monster',
            startDate: '11-August-2019',
            endDate: '11-November-2019',
            duties:[
                    'Implemented enhancements using Spring Batch and Spring Boot to modernize Legacy code.',
                    'Conducted Data Processing for Apache Solr, optimizing data upload processes and reducing processing time by 15%.',
                    'Maintained regular, punctual communication with senior developers for timely updates and guidance.'
            ]
            },
        {
            id:1,
            position: 'Fleet & Commercial Assistant',
            company: 'Ford',
            startDate: '11-August-2019',
            endDate: '11-November-2019',
            duties:[
                    'Implemented enhancements using Spring Batch and Spring Boot to modernize Legacy code.',
                    'Conducted Data Processing for Apache Solr, optimizing data upload processes and reducing processing time by 15%.',
                    'Maintained regular, punctual communication with senior developers for timely updates and guidance.'
            ]            
        }

    ]

    // work: {
    //         0: {
    //             id:0,
    //             position: 'Software Developer Intern',
    //             company: 'monster',
    //             startDate: '11-August-2019',
    //             endDate: '11-November-2019',
    //             duties:[
    //                 'Implemented enhancements using Spring Batch and Spring Boot to modernize Legacy code.',
    //                 'Conducted Data Processing for Apache Solr, optimizing data upload processes and reducing processing time by 15%.',
    //                 'Maintained regular, punctual communication with senior developers for timely updates and guidance.'
    //             ],
    //         },
    //         1: {
    //             id:1,
    //             position: 'Fleet & Commercial Assistant',
    //             company: 'Ford',
    //             startDate: '04-April-2021',
    //             endDate: '04-April-2021',
    //             duties:[
    //                 'Utilized Machine Learning Methods, including Random Forest Tree and Neural Networks, achieving a model accuracy of 85% in predicting Medical Insurance Premiums.',
    //                 'Performed Data Visualization to obtain the most important parameters of the given dataset, showcasing analytical and problem-solving skills.',
    //                 'Processed and cleaned data, enhancing model training efficiency by 25%.'
    //             ],
    //         }
    //     }


}


export default User