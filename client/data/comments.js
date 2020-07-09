const comments = [
    {
      id: "1",
      text: "Hello World",
      user: "Bob",
      likes: 5,
      replies: [
        {
          id: "10",
          text: "Can you write smth better?",
          user: "Emily",
          likes: 10,
          replies: []
        },
        {
          id: "11",
          text: "Where does it come from?",
          user: "Emily",
          likes: 0,
          replies: [
            {
              id: "11",
              text: "Where can I get some?",
              user: "Carl"
            }
          ]
        }
      ]
    },
    {
      id: "2",
      text: "Hello World! How are you today?",
      user: "John Random",
      likes: 3,
      replies: [{ id: "55", text: "I'm fine", user: "Matt" }]
    },
    {
      id: "3",
      likes: 1,
      text: "Lerem Ipsum.... Hi",
      user: "Bob"
    }
  ];

export default comments;
