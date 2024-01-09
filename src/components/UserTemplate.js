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
            id: Date.now(),
            position: 'Software Developer Intern',
            company: 'monster',
            startDate: '11-August-2019',
            endDate: '11-November-2019',
            duties : 'Implemented enhancements using Spring Batch and Spring Boot to modernize Legacy code. \nConducted Data Processing for Apache Solr, optimizing data upload processes and reducing processing time by 15%. \nMaintained regular, punctual communication with senior developers for timely updates and guidance.'
            },
        {
            id:Date.now() + 1 ,             // Both Elements create at same time so end up having the same ID
            position: 'Fleet & Commercial Assistant',
            company: 'Ford',
            startDate: '11-August-2019',
            endDate: '11-November-2019',
            duties : 'Implemented enhancements using Spring Batch and Spring Boot to modernize Legacy code. \nConducted Data Processing for Apache Solr, optimizing data upload processes and reducing processing time by 15%. \nMaintained regular, punctual communication with senior developers for timely updates and guidance.'
       
        }

    ],

    projects: [
        {
            id:Date.now(),
            projectName: 'The Odin Project',
            technologies: ['HTML', 'CSS', 'JS'],
            projectDetails:"Reviewed contribution guidelines for a clear understanding of requirements. \nEnhanced code readability by aligning block delimiters with the project's style guide, creating a more cohesive code structure, demonstrating attention to detail and commitment to code quality \n Closed the issue seamlessly through adherence to the proper process, culminating in a successfully merged pull request."

        }

    ],

    education: [
        {
            id: Date.now(),
            instituteName: 'Thompson Rivers University',
            location:'Kamloops, BC, Canada',
            course: 'Bachelor of Computing Science',
            graduationDate: 'January 2023',
            gpa: '3.37',
            details: 'Mastered the intricacies of web development during my bachelor’s program at Thompson Rivers University, particularly excelling in Software Design and Architecture. \nDemonstrated versatility in coursework, spanning Cloud Computing in AWS and Computer Network Security, contributing to a well-rounded skill set. \nExplored diverse areas of computing science, gaining proficiency in Data Structures, Machine Learning, and Quantum Computing.'
        }
    ]



}


export default User