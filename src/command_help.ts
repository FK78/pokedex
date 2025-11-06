export function commandHelp(commands: any){
    console.log("Welcome to the Pokedex!")
    console.log("Usage:")
    Object.keys(commands).forEach(function (key) {
        console.log(`${commands[key].name}: ${commands[key].description}`)
    })
}