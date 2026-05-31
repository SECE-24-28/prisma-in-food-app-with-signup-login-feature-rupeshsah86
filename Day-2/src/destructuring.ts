const nums: number[] = [1, 2, 3, 4, 5];

const first = nums[0];
const second = nums[1];
const third = nums[2];
console.log("first three  element are:");
console.log(first, second, third);

const [firstElem, , , , lastElem] = nums;
console.log(firstElem, lastElem);

//object destructuring
enum VoteStatus {
  canVote = "YES",
  notEligible = "NO",
}

const user = {
  name: "Ajay",
  age: 30,
  isEligibleToVote: VoteStatus.canVote,
};

const userName = user.name;
const voteStatus = user.isEligibleToVote;
//console.log(`${userName} can vote? : $(voteStatus)`);


//destructure this value
const {name,isEligibleToVote} = user;
console.log(`user name is: ${name} and vote status is: ${isEligibleToVote}`);

