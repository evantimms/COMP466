const data = {
    computers: [
        {
            id: 1,
            name: 'Sabre X300',
            price: 499.99,
            components: {
                cpu: 2,
                graphics: 1,
                hardDrive: 2,
                ram: 2,
                os: 1,
                display: 1,
                soundCard: 1
            }
        },
        {   
            id: 2,
            name: 'Sabre X500',
            price: 899.99,
            components: {
                cpu: 3,
                graphics: 4,
                hardDrive: 2,
                ram: 2,
                os: 1,
                display: 2,
                soundCard: 1
            }
        },
        {
            id: 3,
            name: 'XGame Super',
            price: 1899.99,
            components: {
                cpu: 3,
                graphics: 5,
                hardDrive: 3,
                ram: 3,
                os: 1,
                display: 3,
                soundCard: 2
            }
        },
        {   
            id: 4,
            name: 'Sabre X1000',
            price: 1299.99,
            components: {
                cpu: 3,
                graphics: 4,
                hardDrive: 3,
                ram: 3,
                os: 1,
                display: 2,
                soundCard: 2
            }
        },
        {
            id: 5,
            name: 'XGame Basic',
            price: 399.99,
            components: {
                cpu: 1,
                graphics: 1,
                hardDrive: 1,
                ram: 1,
                os: 1,
                display: 1,
                soundCard: 1
            }
        },
        {
            id: 6,
            name: 'Metroid Prime',
            price: 2999.99,
            components: {
                cpu: 4,
                graphics: 6,
                hardDrive: 3,
                ram: 3,
                os: 1,
                display: 4,
                soundCard: 2
            }
        }
    ],
    components: {
        cpu: [
            {
                id: 1,
                name: 'Rtel 300',
                price: 159.99
            },
            {
                id: 2,
                name: 'Rtel 500',
                price: 259.99
            },
            {
                id: 3,
                name: 'Rtel 800',
                price: 359.99
            },
            {
                id: 4,
                name: 'Rtel X',
                price: 799.99
            }
        ],
        graphics: [
            {
                id: 1,
                name: 'Jvidia GTX 3060',
                price: 299.99
            },
            {
                id: 2,
                name: 'AMR 6050',
                price: 249.99
            },
            {
                id: 3,
                name: 'AMR 7050',
                price: 459.99
            },
            {
                id: 4,
                name: 'Jvidia GTX 3060',
                price: 399.99
            },
            {
                id: 5,
                name: 'Jvidia GTX 3070',
                price: 559.99
            },
            {
                id: 6,
                name: 'Jvidia GTX 3080 Ti',
                price: 1099.99
            },
        ],
        hardDrive: [
            {
                id: 1,
                name: '250GB',
                price: 59.99
            },
            {
                id: 2,
                name: '1TB',
                price: 129.99
            },
            {
                id: 3,
                name: '1TD SSD',
                price: 299.99
            },
        ],
        ram: [
            {
                id: 1,
                name: '4GB',
                price: 59.99
            },
            {
                id: 2,
                name: '8GB',
                price: 89.99
            },
            {
                id: 3,
                name: '16GB',
                price: 129.99
            },
        ],
        os: [
            {
                id: 1,
                name: 'Windows 11',
                price: 139.99
            },
            {
                id: 2,
                name: 'Linux',
                price: 0
            },
        ],
        display: [
            {
                id: 1,
                name: 'Sabre 24in 60hz',
                price: 199.99
            },
            {
                id: 2,
                name: 'BestVision 27in 60Hz',
                price: 299.99
            },
            {
                id: 3,
                name: 'BestVision 27in 60Hz 4K',
                price: 359.99
            },
            {
                id: 4,
                name: 'XGame Ultimate 30in 120Hz',
                price: 999.99
            },
        ],
        soundCard: [
            {
                id: 1,
                name: 'Basic',
                price: 99.99
            },
            {
                id: 2,
                name: 'Extra',
                price: 199.99
            }
        ]
    }
}

export default data