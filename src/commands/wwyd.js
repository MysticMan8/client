const {EmbedBuilder, SlashCommandBuilder} = require('discord.js');
const guildModel = require('../util/Models/guildModel');

module.exports = {
    requireGuild: true,
    data: new SlashCommandBuilder()
        .setName('wwyd')
        .setDescription('What would you do in this situation')
        .setDMPermission(false)
        .setDescriptionLocalizations({
            de: 'Was würdest du in dieser Situation tun',
            "es-ES": '¿Qué harías en esta situación?'
        }),

    /**
     * @param {CommandInteraction} interaction
     * @param {WouldYou} client
     * @param {guildModel} guildDb
     */
    async execute(interaction, client, guildDb) {
        const {Wwyd} = require(`../languages/${guildDb.language}.json`);

        const {WhatYouDo} = require(`../data/wwyd-${guildDb.language}.json`);

        const wwydstring = WhatYouDo[Math.floor(Math.random() * WhatYouDo.length)];

        const wwydembed = new EmbedBuilder()
            .setColor('#0598F6')
            .setFooter({
                text: `${Wwyd.embed.footer}`,
                iconURL: client.user.avatarURL(),
            })
            .setTimestamp()
            .setTitle(Wwyd.embed.title)
            .setDescription(`> ${wwydstring}`);

        const time = guildDb?.voteCooldown ?? 25000;

        const vote = await client.voting.generateVoting(interaction.guildId, 0, 1, Wwyd.embed.option1, Wwyd.embed.option2);

        if(time > 3 * 60 * 1000) {

        } else {

        }



        return interaction.reply({embeds: [wwydembed]}).catch((err) => {

        });
    },
};
