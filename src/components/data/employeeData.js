import Williams from "assets/img/seth_williums.png"
import Harris from "assets/img/Ramon Harris.png"
import morgan from "assets/img/Dan Morgan.png"
import nelson from "assets/img/Stella Nelson.png"
import parks from "assets/img/Janet Parks.png"
import kaif from "assets/img/Isabelle Kaif.png"
import toney from "assets/img/Ivan Toney.png"
import francis from "assets/img/Sabrina Francis.png"
import clark from "assets/img/Miles Clark.png"
import angela from "assets/img/Angela Howard.png"
import vera from "assets/img/Vera Martinez.png"
import brian from "assets/img/Miles Clark.png"


const employeeData = {
  name: "Seth Williams",
  designation: "Managing director",
  profilePicImg: Williams,
  children: [

    {
      name: "Ramon Harris",
      designation: "Regional Director",
      profilePicImg: Harris,
      children: [
        {
          name: "Janet Parks",
          department: "Retail",
          designation: "CEO",
          employeeLength : "11",
          profilePicImg: parks,
        },
        {
          name: "Isabelle Kaif",
          department: "Retail",
          designation: "CFO",
          profilePicImg: kaif,
        },
      ],
   
    },
    {
      name: " Dan Morgan",
      designation: "Regional Director",
      profilePicImg: morgan,
      children: [
        {
          name: "Ivan Toney",
          department: "Retail",
          designation: "CEO",
          employeeLength : "2",
          profilePicImg: toney,
          children:[{
            name :"Brian Walker",
            profilePicImg: brian,
          },
          {
            name :"Vera Martinez",
            profilePicImg: vera,
          }]
        },
        {
          name: "Sabrina Francis",
          department: "Retail",
          designation: "CEO",
          profilePicImg: francis,
        },
      ],
    },
    {
      name: "Stella Nelson",
      designation: "Regional Director",
      profilePicImg: nelson,
      children: [
        {
          name: "Miles Clark",
          department: "Retail",
          designation: "CEO",
          employeeLength : "11",
          profilePicImg: clark,
        },
        {
          name: "Angela Howard",
          department: "Retail",
          designation: "CEO",
          employeeLength : "2",
          profilePicImg: angela,
        },
      ],
    },
  ],
};

export { employeeData };
