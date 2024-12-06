import { Optional } from 'sequelize';
import { Table, Model } from 'sequelize-typescript';

interface PersonAttributes {
	id: number;
	name: string;
}

interface PersonCreationAttributes extends Optional<PersonAttributes, 'id'> {}

@Table({ tableName: 'Person'})
class Person extends Model<PersonAttributes, PersonCreationAttributes> {}

export default Person;