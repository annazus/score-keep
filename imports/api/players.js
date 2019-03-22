import { Mongo } from "meteor/mongo";
import numeral from "numeral";
export const Players = new Mongo.Collection("players");

export const calculatePlayerPositions = players => {
  rank = 1;

  return players.map((player, index) => {
    console.log(player);
    if (index !== 0 && players[index - 1].score > players[index].score) rank++;
    return {
      ...player,
      rank,
      position: numeral(rank).format("0o")
    };
  });
};
