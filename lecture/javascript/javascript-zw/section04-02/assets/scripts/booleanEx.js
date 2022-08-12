const userName = 'Max';
const altName = '';
console.log(userName === 'Max'); // 불리언 값 참을 생성하고 출력
console.log(userName); // 문자열 'Max'에서 변경되지 않음

console.log(userName || null); // userName이 Truthy이므로 ||로 'Max'가 반환됨
console.log(altName || 'Max'); // altName은 (빈 문자열이므로)Falsy이며 'Max'가 반환됨
console.log(altName || ''); // altName과 ''는 모두 Falsy이지만 만일 첫 피연산자가 Falsy라면 항상 두 번째 피연산자가 반환되므로 ''이 반환됨

console.log(altName || null || 'Anna'); // altName과 null은 Falsy이므로 'Anna'가 반환됨

console.log(userName && 'Anna'); // userName은 Truthy이므로 두 번째 (!) 값인 'Anna'가 반환됨
console.log(altName && 'Anna'); // altName은 Falsy이므로 첫 번째 값인 ''이 반환됨
console.log(userName && ''); // userName은 Truthy이므로 두 번째 값인 ''이 반환됨

