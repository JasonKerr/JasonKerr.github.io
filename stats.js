/**
 * @param {number[]} ages
 */
export function getVotersCount(ages) {
    console.log(ages);
    const legalVotingAges = ages.filter(function(age) {
        return age >= 18;
    });
    return legalVotingAges.length;
}
