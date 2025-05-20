import Card from '../../Card ';



function ContainCard({ characters }) {
  return (

    <section>
      {
        characters.map(c =>

          <Card
            index={c.id}
            fullName={c.fullName}
            title={c.title}
            family={c.family}
            imageUrl={c.imageUrl}
          />
        )
      }
    </section>


  )
}
export default ContainCard
