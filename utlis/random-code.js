


exports.RandoomCode = ()  => {


    try {

        const randomNumbers = [];
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * 10);
            randomNumbers.push(randomNumber);
        }
        return randomNumbers.join('')
        ;
        
    
        
    } catch (error) {
        return res.status(404).json({
            message: '',
            data: error,
        });
    }


   

}