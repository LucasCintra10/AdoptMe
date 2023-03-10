const Pet = (propos) => {
  return (
    <div>
      <h1>{propos.name}</h1>
      <h2>{propos.animal}</h2>
      <h2>{propos.breed}</h2>
    </div>
  );
};

export default Pet;
