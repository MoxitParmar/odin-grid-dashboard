import {Dashboard , Nav , Main1 } from './sections'

const App = () => (
  <main className="relative h-[110vh]">
  <section className="flex h-full">
    <section className="flex-[20%] bg-sky-600 "> <Dashboard /> </section>
    <section className="flex flex-col flex-[80%] ">
      <section className="h-1/6 bg-white drop-shadow-lg"> < Nav /></section>
      <section className="flex-1 bg-gray-200 "> <Main1 /></section>
    </section> 
  </section>
  </main>
)

export default App