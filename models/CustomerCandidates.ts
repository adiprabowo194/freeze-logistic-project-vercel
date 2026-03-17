import { DataTypes, Model } from "sequelize";
import { sequelize } from "@/lib/sequelize";

class CustomerCandidates extends Model {}

CustomerCandidates.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    company_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    contact_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    contact_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },

    suburb: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    street_address: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },

    enquiry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },

    input_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "CustomerCandidates",
    tableName: "customer_candidates",
    timestamps: false, // penting karena tabel tidak punya createdAt & updatedAt
  }
);

export default CustomerCandidates;