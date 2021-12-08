import { discord } from '$lib/discord/client';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ params })
{
  const { guildId } = params;
  if(!guildId)
    return { status: 400 };

  try
  {
    const { data } = await discord.get(`/guilds/${guildId}/roles`);
    const sortedRoles = data.sort((a, b) => b.position - a.position);
    const mappedRoles = sortedRoles.map(mapRole);
    return { body: mappedRoles };
  }
  catch(error)
  {
    return { status: error.response.status, body: error.response.data };
  }
}

function mapRole(role)
{
  return {
    id: role.id,
    name: role.name,
    permissions: role.permissions,
    position: role.position,
    color: role.color,
    hoist: role.hoist,
    managed: role.managed,
    mentionable: role.mentionable,
    icon: role.icon,
    unicodeEmoji: role.unicode_emoji,
    permissionsNew: role.permissions_new,
  };
}
