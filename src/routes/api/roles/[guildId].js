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
    return { body: sortedRoles };
  }
  catch(error)
  {
    return { status: error.response.status, body: error.response.data };
  }
}
