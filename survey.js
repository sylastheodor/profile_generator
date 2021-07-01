const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("WUSYANAME? ", (name) => {
  console.log(`You have the name: ${name}`)
  rl.question("Are you sure? ", (prompt) => {
    console.log(`okay so ${name} is definitely your name... `)
    rl.question("Well like, what do you do for fun? ", (hobby) => {
      console.log(`${hobby} huh?  Well alright...`);
      rl.question("And what do you listen to while doing that?? ", (music) => {
        console.log(`What?! ${music}?? I've never heard of that...`);
        rl.question(`This might be weird but...what's your favourite meal? `, (meal) => {
            console.log(`${meal} huh... you know what that's actually kinda fire alright.`);
            rl.question(`So what are you eating for that meal?? `, (food) => {
              console.log(`Niiiiiice, I LOVE ${food}`);
              rl.question(`Which sports do you watch? `, (sport) => {
                console.log(`I actuall think ${sport} sucks.`);
                rl.question(`Okay so, now this one's really important... what's your super power? `,(superp) => {
                    console.log(`So, basically, \n ${name} loves listening to ${music} while ${hobby}ing, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superp}.`);
                    rl.question(`I got that right??`, (answer) => {
                      console.log("Ha, what a NERD");
                      rl.close();
                    });
                  }
                );
              });
            });
          }
        );
      });
    });
  });
});
