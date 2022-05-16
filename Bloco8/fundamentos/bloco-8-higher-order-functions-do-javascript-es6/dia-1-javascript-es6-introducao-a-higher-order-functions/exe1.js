

const newEmployees = (directName) => {
    const employees = {
      id1: directName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: directName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: directName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const nameG = (nameFull) => {
    const e_mail = nameFull.split(' ').join('_');
    return {nameFull, e_mail: `${e_mail}@trybe.com`}
}

  console.log(newEmployees(nameG));