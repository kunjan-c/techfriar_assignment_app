import SethWilliams from "assets/img/seth_williums.png";
import daveCooper from "assets/img/dev_cooper.png";
const orgChart = {
  designation: "Managing director",
  name: "Seth Williams",
  img: SethWilliams,
  children: [
    {
      designation: "Regional Director",
      name: "Dave Cooper",
      img: daveCooper,
      attributes: {
        department: "Regional Director",
      },
      children: [
        {
          designation: "Regional Director",
          name: "Ramon Harris",
          img: daveCooper,
          //   attributes: {
          //     department: "Regional Director",
          //   },
          children: [
            {
              designation: "CEO",
              name: "Janet Parks",
              img: daveCooper,
            },
            {
              designation: "CFO",
              name: "Isabelle Kaif",
              img: daveCooper,
            },
          ],
        },
        {
          designation: "Regional Director",
          name: "Dan Morgan",
          img: daveCooper,
          //   attributes: {
          //     department: "Regional Director",
          //   },
          //   children: [
          //     {
          //       name: "Worker",
          //     },
          //   ],
        },
        {
          designation: "Regional Director",
          name: "Stella Nelson",
          img: daveCooper,
          //   attributes: {
          //     department: "Regional Director",
          //   },
          //   children: [
          //     {
          //       name: "Worker",
          //     },
          //   ],
        },
        // {
        //   name: "Foreman",
        //   attributes: {
        //     department: "Assembly",
        //   },
        //   children: [
        //     {
        //       name: "Worker",
        //     },
        //   ],
        // },
      ],
    },
  ],
};
