fetch('https://learn.codeit.kr/api/interviews/summer')
  .then((response) => response.json())
  .then((interviewResult) => {
    const { interviewees } = interviewResult;
    const newMembers = interviewees.filter((interviewee) => interviewee.result === 'pass');
    // console.log(newMembers);
    // return JSON.stringify(newMembers[0]);
    return JSON.stringify(newMembers);

    // const members = newMembers.map(member => { 
    //   return {
    //     name : member.name,
    //     email : `${member.name.toLowerCase()}@codeitmall.kr`,
    //     department : ''
    //   }
    // });

    // console.log(JSON.stringify(members));

    // return JSON.stringify(members);
  })
  .then((newMembers) => fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    headers: { // 추가된 부분
      'Content-Type': 'application/json',
    },
    body: newMembers,
  }))
  .then((response) => { 
    // console.log('test');
    if (response.status === 200) {
      return fetch('https://learn.codeit.kr/api/members');
    } else {
      throw new Error('New members not added');
    }
  })
  .then((response) => response.json())
  .then((members) => {
    console.log(`총 직원 수: ${members.length}`);
    console.log(members);
  });