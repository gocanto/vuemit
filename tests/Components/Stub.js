import Vuemit from '../../src/Vuemit';

export default
{
	data() {
		return { person : {} }
	},

	render(h)
	{
		return h('<body><div id = "demo"></div></body>');
	},

	mounted()
	{
		Vuemit.listen('setPerson', this.onPersonChanged);
		Vuemit.listen('setPersonOnce', this.onListenOnce);
	},

	methods:
	{
		setPerson(person)
		{
			this.person = person;
		},

		getPerson()
		{
			return this.person;
		},

		onPersonChanged(person)
		{
			this.person = person;
		},

		onListenOnce(person)
		{
			this.person = person;
			Vuemit.remove('setPersonOnce', this.onListenOnce);
		}
	}
}
